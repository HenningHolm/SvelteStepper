<script lang="ts">
  import Step from "./step.svelte";
  import { StepperDirection, type StepProps } from "./stepper";

  export let steps: StepProps[];
  export let direction: StepperDirection = StepperDirection.Horisontal;
</script>

<div id="stepperContainer">
  {#each steps as props, index}
    <Step {props} />
  {/each}
</div>
