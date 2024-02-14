<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { StepState, type StepProps, StepperDirection } from "./StepperModels";


  export let step: StepProps;
  export let isLast: boolean;
  export let index: number;
  export let direction: StepperDirection;
  let active = false;
  let hasError = false;
  let sleep = true;
  let waiting = true;

  const dispatch = createEventDispatcher();

  // En enkel funksjon for å bestemme ikonet basert på trinntilstanden
  function iconForState(state: StepState): string {
    let icon = "";
    active = false;
    switch (state) {
      case StepState.Aktiv:
        icon = `counter_${index+1}`;
        active = true;
        sleep = false;
        waiting = false;
        break;
      case StepState.IkkePåbegynt:
        icon = `counter_${index+1}`;
        break;
      case StepState.Fullført:
        icon = "check_circle";
        active = true;
        sleep = false;
        waiting = false;
        break;
      case StepState.Feilet:
        icon = "check_circle";
        active = true;
        sleep = false;
        waiting = false;
        break;
      default:
        icon = "help_outline";
        break;
    }
    return icon;
  }
</script>

<div class="step">
  <span
    on:click={() => dispatch("clicked", { index })}
    class="material-symbols-sharp" class:active class:hasError class:sleep>
    {iconForState(step.state)}
    </span
  >
  {#if !isLast}
    <div class="divider-horizontal {step.selected && 'selectedInterval'}" class:waiting></div>
  {/if}
</div>

<style>
  .step {
    position: relative;
    display: flex;
    align-items: center
  }

  .divider-horizontal {
    height: 2px;
    width: 100px;
    background-color: black;
    flex-grow: 1;
  }
  .selectedInterval {
    height: 4px;
  }
  .active{
    font-variation-settings:
    "FILL" 1,
    "wght" 300,
    "GRAD" 1,
    "opsz" 48 !important
  }

  .hasError{
    color: red;
  }
  .sleep{
    color:rgb(184, 184, 184);
  }
  .waiting{
    background-color: rgb(184, 184, 184);
  }
  span{
    cursor: pointer;
  }
  
</style>
