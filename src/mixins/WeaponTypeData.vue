<script>
import { Bows } from '@/data/weapons/Bows'
import { ChargeBlades } from '@/data/weapons/ChargeBlades'
import { DualBlades } from '@/data/weapons/DualBlades'
import { GreatSwords } from '@/data/weapons/GreatSwords'
import { Gunlances } from '@/data/weapons/Gunlances'
import { Hammers } from '@/data/weapons/Hammers'
import { HeavyBowguns } from '@/data/weapons/HeavyBowguns'
import { HuntingHorns } from '@/data/weapons/HuntingHorns'
import { InsectGlaives } from '@/data/weapons/InsectGlaives'
import { Lances } from '@/data/weapons/Lances'
import { LightBowguns } from '@/data/weapons/LightBowguns'
import { LongSwords } from '@/data/weapons/LongSwords'
import { SwitchAxes } from '@/data/weapons/SwitchAxes'
import { SwordNShields } from '@/data/weapons/SwordNShields'

export default {
  data() {
    return {
      weaponData: {
        1: GreatSwords,
        2: LongSwords,
        3: SwordNShields,
        4: DualBlades,
        5: Hammers,
        6: HuntingHorns,
        7: Lances,
        8: Gunlances,
        9: SwitchAxes,
        10: ChargeBlades,
        11: InsectGlaives,
        12: LightBowguns,
        13: HeavyBowguns,
        14: Bows,
      }
    }
  },
}
</script>
