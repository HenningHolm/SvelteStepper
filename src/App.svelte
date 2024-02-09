<script lang="ts">
  import { StepperDirection, StepState } from './Stepper/stepper';
  import Stepper from './Stepper/stepper.svelte';
   interface StepProps{
    icons: string[];
    title: string;
    description: string;
    state: StepState;
}

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
  ];

</script>

<main>
  
 <Stepper {steps} />

</main>


