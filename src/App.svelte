<script lang="ts">
  import Stepper from "./Stepper/Stepper.svelte";
  import { StepState, StepperDirection, type StepProps, type StepperProps } from "./Stepper/StepperModels";

  let steps = [
    {
      icons: ["settings"],
      title: "Step 1",
      description: "This is the first step",
      state: StepState.Aktiv,
    },
    {
      icons: ["settings"],
      title: "Step 2",
      description: "This is the second step",
      state: StepState.IkkePåbegynt,
    },
    {
      icons: ["settings"],
      title: "Step 3",
      description: "This is the third step",
      state: StepState.IkkePåbegynt,
    },
    {
      icons: ["settings"],
      title: "Step 4",
      description: "This is the fourth step",
      state: StepState.IkkePåbegynt,
    },
  ] as StepProps[];

  let stepperProps = {
    selectedStep: 0,
    direction: StepperDirection.Horisontal,
  } as StepperProps;
</script>

<main>
  <Stepper {stepperProps} {steps} />
</main>
