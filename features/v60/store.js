import {atom} from 'jotai'
import {atomWithReset} from 'jotai/utils'

const temperatureAtom = atom(94)
const coffeeBeanAtom = atom(15)
const coffeeBeanNumberAtom = atom(get => Number(get(coffeeBeanAtom)))
const waterRatioAtom = atom(15)
const waterRatioNumberAtom = atom(get => Number(get(waterRatioAtom)))
const waterNumberAtom = atom(get => get(coffeeBeanNumberAtom) * get(waterRatioNumberAtom))
const isStartedAtom = atom(false)
const durationAtom = atomWithReset(0)

export {
  temperatureAtom,
  coffeeBeanAtom,
  coffeeBeanNumberAtom,
  waterRatioAtom,
  waterRatioNumberAtom,
  waterNumberAtom,
  isStartedAtom,
  durationAtom
}
