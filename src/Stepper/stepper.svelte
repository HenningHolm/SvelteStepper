<script lang="ts">
    import Step from "./Step.svelte";
    import { StepState, type StepperProps, type StepProps } from './StepperModels';

    export let stepperProps : StepperProps;
    export let steps : StepProps[];
    let atStart = true;
    let atEnd = false;
    let scrollContainer: HTMLElement;

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

    function scrollLeft(){
      const newScrollPosition = scrollContainer.scrollLeft - scrollContainer.offsetWidth;
      scrollContainer.scrollBy({ left: -scrollContainer.offsetWidth, behavior: 'smooth' });
      atStart = newScrollPosition <= 0;
      atEnd = newScrollPosition + scrollContainer.offsetWidth >= scrollContainer.scrollWidth;
    }
    function scrollRight(){
      const newScrollPosition = scrollContainer.scrollLeft + scrollContainer.offsetWidth;
      scrollContainer.scrollBy({ left: scrollContainer.offsetWidth, behavior: 'smooth' });
      atStart = newScrollPosition <= 0;
      atEnd = newScrollPosition + scrollContainer.offsetWidth >= scrollContainer.scrollWidth;
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
    <div class="scroll-menu">   
      <a class="scroll-button prev" on:click={scrollLeft} class:hidden={atStart}>&#10094;</a> 
      <div  class="flex-container" bind:this={scrollContainer}>  
    {#each steps as step, index (step.title)}
      <Step on:clicked={selectStep} {step} isLast={index === steps.length - 1} {index} direction={stepperProps.direction} />
    {/each}
  </div>
  <a class="scroll-button next" on:click={scrollRight} class:hidden={atEnd}>&#10095;</a>
</div>
    <button on:click={nextStep}>Next</button>
  </div>

  
  <style>

    
  .stepper {
    display: flex;
    position: relative;
    overflow: hidden; /* Sørger for at innhold som går ut over ikke vises */
  }

a{
  cursor: pointer;
}
  .step {
    height: 200px;
  }
  button{
    margin:  20px;
    z-index:2;
  }

  .scroll-menu {
  display: flex;
  align-items: center;
}

.flex-container {
    display: flex;
    overflow-x: auto;
    padding: 20px;
    width: 400px;
    position: relative;
    overflow: hidden;
  }
  .hidden {
  visibility: hidden; /* bruker 'visibility' i stedet for 'display' for å opprettholde layouten */
  pointer-events: none; /* sikrer at elementet ikke kan interagere */
}

  .scroll-button.prev {
    background: linear-gradient(to right, #ffffff, #ffffff 60%, transparent 100%);
    padding: 80px;
    position: absolute;
    z-index:1;
    left:0;
  }
  .scroll-button.next {
    background: linear-gradient(to left, #ffffff, #ffffff 60%, transparent 100%);
    padding: 80px;
    position: absolute;
    z-index: 1;
    right: 0;
  }

  </style> 