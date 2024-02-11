<script lang="ts">
    import Step from "./Step.svelte";
    import { StepState, type StepperProps, type StepProps } from './StepperModels';
  
    export let stepperProps : StepperProps;
    export let steps : StepProps[];

    function nextStep() {
      if (stepperProps.selectedStep < steps.length - 1) {
        setStep(stepperProps.selectedStep + 1);
      }
    }
    function prevStep() {
      if (stepperProps.selectedStep > 0) {
        setStep(stepperProps.selectedStep - 1);
      }
    }

    function selectStep(data: any) {
      setStep(data.detail.index);
    }

    //reflect over state, two types of state, selected or not, and if it is selected, it is either active, completed, not started or error.
    function setStep(index: number) {
      stepperProps.selectedStep = index;
      for (let i = 0; i < steps.length; i++) {
        steps[i].selected = i === index;
        if (i < index) {
          steps[i].state = StepState.Fullført;
        } else if (i === index) {
          steps[i].state = StepState.Aktiv;
        } else {
          steps[i].state = StepState.IkkePåbegynt;
        }
      }
    }

  </script>
  
  <div class="stepper {stepperProps.direction}">
    <button on:click={prevStep}>Prev</button>
    {#each steps as step, index (step.title)}
      <Step on:clicked={selectStep} {step} isLast={index === steps.length - 1} {index} direction={stepperProps.direction} />
    {/each}
    <button on:click={nextStep}>Next</button>
  </div>
  
  <style>
  .stepper {
    display: flex;
  }

  .step {
    width: 200px;
    height: 200px;
  }

  </style> 