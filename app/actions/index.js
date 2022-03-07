export const idle = () => {
  return {
    type: "IDLE"
  }
}

export const attackP1 = () => {
  return {
    type: "ATTACK_P1",
    damage
  }
}

export const attackP2 = () => {
  return {
    type: "ATTACK_P2",
    damage
  }
}

export const deadP1 = () => {
  return {
    type: "DEAD_P1",
    damage
  }
}

export const deadP2 = () => {
  return {
    type: "DEAD_P2",
    damage
  }
}

export const armourP1 = () => {
  return {
    type: "ARMOUR_P1",
    plus
  }
}

export const armourP2 = () => {
  return {
    type: "ARMOUR_P2",
    plus
  }
}

export const evationP1 = () => {
  return {
    type: "EVATION_P1",
    evationPlus
  }
}

export const evationP2 = () => {
  return {
    type: "EVATION_P2",
    evationPlus
  }
}
