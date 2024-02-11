<script lang="ts">
  import { createEventDispatcher } from 'svelte';
    import { StepState, type StepProps, StepperDirection } from './StepperModels';
  
    export let step: StepProps;
    export let isLast: boolean;
    export let index: number;
    export let direction: StepperDirection;
    
    
    const dispatch = createEventDispatcher();
  

    // En enkel funksjon for å bestemme ikonet basert på trinntilstanden
    function iconForState(state: StepState): string {
      console.log("hel",state);
      let icon = '';
      switch (state) {
        case StepState.Aktiv: icon = 'settings'; break;
        case StepState.IkkePåbegynt: icon = 'pending'; break;
        case StepState.Fullført: icon = 'check_circle'; break;
        default: icon = 'help_outline'; break;
      }
      console.log("icon",icon);
      return icon;
    }
      //   case StepState.Aktiv: return 'settings'; // Eksempelikon for Aktiv
      //   case StepState.IkkePåbegynt: return 'pending'; // Eksempelikon for IkkePåbegynt
      //   case StepState.Fullført: return 'check_circle'; // Eksempelikon for Fullført
      //   default: return 'help_outline'; // Standardikon
      // }
    
  </script>
  
  <div class="step">
    <span on:click={()=>dispatch("clicked", {index})} class="material-symbols-outlined">{iconForState(step.state)}</span>
    {#if !isLast}
      <div class="divider-horizontal {step.selected && "selectedInterval"}"></div>
    {/if}
  </div>
  
  <style>
    .step {
      position: relative;
      display: flex;
      align-items: center;
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
  </style>