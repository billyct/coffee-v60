import {atom} from 'jotai'
import {atomWithReset} from 'jotai/utils'

const temperatureAtom = atom(94)
const coffeeBeanAtom = atom(15)
const waterRatioAtom = atom(15)
const waterAtom = atom(get => get(coffeeBeanAtom) * get(waterRatioAtom))
const isStartedAtom = atom(false)
const durationAtom = atomWithReset(0)

export {
  temperatureAtom,
  coffeeBeanAtom,
  waterRatioAtom,
  waterAtom,
  isStartedAtom,
  durationAtom
}
