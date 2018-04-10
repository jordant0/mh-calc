window.scrapeData = function(type) {
  if(typeof type === 'undefined') {
    type = 'blademaster';
  }

  var data = {},
      itemId = 0;

  jQuery('table tbody tr').each(function(index) {
    var id = index + 1,
        $row = $(this),
        name = $($row.find('td a')[0]).text().trim(),
        raw = parseInt($($row.find('td')[2]).text()),
        rarity = parseInt($($row.find('td')[6]).text().replace('RARE', '')),
        upgradeLevel = $($($row.find('td')[0]).find('span')).text().replace(/\s/g, '').length,
        $extraData = $($row.find('td')[3]),
        $sharpness = $($row.find('td')[4]),
        affinity = 0,
        coating = 1,
        sharpness = {},
        element = null,
        augmentable = false;

    itemId = id;

    $extraData.find('div').each(function() {
      var [info, value] = $(this).text().replace(/[()]/g, '').replace(/\s+/g, ' ').trim().split(' ');
      if(info === 'Affinity') {
        affinity = parseInt(value.replace('%', ''));
      }
      else if(!isNaN(info)) {
        var elemData = {
          value: parseInt(info),
          type: value
        }

        if($(this).find('.text-muted').length > 0) {
          elemData.hidden = true;
        }
        element = elemData;
      }
    });

    if(type === 'blademaster') {
      $sharpness.find('> div').each(function(index) {
        var value = 0;

        $(this).find('> div').each(function(i) {
          if(!$(this).is('.sharpness-black') && $(this).css('width') !== '0px') {
            value = i;
          }
        });

        if(index === 0) {
          sharpness.base = value;
        }
        else {
          sharpness.max = value;
        }
      });
    }
    else if(type === 'bow' && $sharpness.find('.coating-2').length) {
      coating = 2;
    }

    if(id > 1 && upgradeLevel <= data[id - 1].upgradeLevel) {
      data[id - 1].augmentable = true;
    }

    if(type === 'blademaster') {
      data[id] = {
        name,
        raw,
        affinity,
        sharpness,
        rarity,
        element,
        upgradeLevel,
        augmentable,
      }
    }
    else if(type === 'bow') {
      data[id] = {
        name,
        raw,
        affinity,
        coating,
        rarity,
        element,
        upgradeLevel,
        augmentable,
      }
    }
    else {
      data[id] = {
        name,
        raw,
        affinity,
        rarity,
        element,
        upgradeLevel,
        augmentable,
      }
    }
  });

  data[itemId].augmentable = true;

  return JSON.stringify(data, null, 2);
}
