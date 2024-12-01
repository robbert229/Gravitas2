GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("greenhouse")
    .category("gregitas")
    .setEUIO("in")
    .setMaxIOSize(3, 4, 1, 0)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.BATH)
})

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("greenhouse", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("greenhouse")
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifiers([
      GTRecipeModifiers.PARALLEL_HATCH,
      GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK)
    ])
    .pattern((definition) =>
      FactoryBlockPattern.start()
        .aisle("FFF", "CCC", "CGC", "CGC", "CLC", "CCC")
        .aisle("FFF", "CMC", "GSG", "G#G", "LIL", "COC")
        .aisle("FFF", "CKC", "CGC", "CGC", "CLC", "CNC")
        .where("K", Predicates.controller(Predicates.blocks(definition.get())))
        .where("L", Predicates.blocks(GTBlocks.CASING_GRATE.get()))
        .where(
          "C",
          Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
            .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            .or(Predicates.abilities(PartAbility.PARALLEL_HATCH))
        )
        .where("O", Predicates.abilities(PartAbility.MUFFLER))
        .where("N", Predicates.abilities(PartAbility.MAINTENANCE))
        .where("I", Predicates.blocks("glowstone"))
        .where("F", Predicates.blocks("gtceu:steel_frame"))
        .where("#", Predicates.air())
        .where(
          "M",
          Predicates.blocks("tfc:dirt/loam")
            .or(Predicates.blocks("tfc:dirt/sandy_loam"))
            .or(Predicates.blocks("tfc:dirt/silt"))
            .or(Predicates.blocks("tfc:dirt/silty_loam"))
            .or(Predicates.blocks("tfc:grass/loam"))
            .or(Predicates.blocks("tfc:grass/sandy_loam"))
            .or(Predicates.blocks("tfc:grass/silt"))
            .or(Predicates.blocks("tfc:grass/silty_loam"))
        )
        .where(
          "S",
          Predicates.blocks("tfc:wood/sapling/acacia")
            .or(Predicates.blocks("tfc:wood/sapling/ash"))
            .or(Predicates.blocks("tfc:wood/sapling/aspen"))
            .or(Predicates.blocks("tfc:wood/sapling/birch"))
            .or(Predicates.blocks("tfc:wood/sapling/blackwood"))
            .or(Predicates.blocks("tfc:wood/sapling/chestnut"))
            .or(Predicates.blocks("tfc:wood/sapling/douglas_fir"))
            .or(Predicates.blocks("tfc:wood/sapling/hickory"))
            .or(Predicates.blocks("tfc:wood/sapling/kapok"))
            .or(Predicates.blocks("tfc:wood/sapling/mangrove"))
            .or(Predicates.blocks("tfc:wood/sapling/maple"))
            .or(Predicates.blocks("tfc:wood/sapling/oak"))
            .or(Predicates.blocks("tfc:wood/sapling/palm"))
            .or(Predicates.blocks("tfc:wood/sapling/pine"))
            .or(Predicates.blocks("tfc:wood/sapling/rosewood"))
            .or(Predicates.blocks("tfc:wood/sapling/sequoia"))
            .or(Predicates.blocks("tfc:wood/sapling/spruce"))
            .or(Predicates.blocks("tfc:wood/sapling/sycamore"))
            .or(Predicates.blocks("tfc:wood/sapling/white_cedar"))
            .or(Predicates.blocks("tfc:wood/sapling/willow"))
            .or(Predicates.air())
        )
        .where("G", Predicates.blocks("ae2:quartz_glass"))
        .build()
    )
    .workableCasingRenderer(
      "gtceu:block/casings/solid/machine_casing_solid_steel",
      "gtceu:block/multiblock/implosion_compressor",
      false
    )
})
