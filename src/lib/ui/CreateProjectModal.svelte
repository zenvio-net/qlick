<script lang="ts">
  import { Button, Checkbox, Input, Label, Modal, Select } from 'flowbite-svelte';

  let clickOutsideModal = true;

  let projectName = "MyViteProject"
  let framework = "Vanilla";
  let frameworks = [
    { value: "Vanilla", name: "Vanilla" },
    { value: "Vue", name: "Vue" },
    { value: "React", name: "React" },
    { value: "Preact", name: "Preact" },
    { value: "Lit", name: "Lit" },
    { value: "Svelte", name: "SvelteKit" },
    { value: "Solid", name: "Solid" },
    { value: "Qwik", name: "Qwik" }
  ];

  let typescript = true;
  let metaFramework: string = "None";
  let metaFrameworks: {value: string, name: string}[] = [];

  function getMetaFrameworks(): {value: string, name: string}[] {
    let frameworks: { value: string; name: string; }[] = [{ value: "None", name: "None" }]

    switch (framework) {
      case "Vue":
        frameworks.push({ value: "Nuxt", name: "Nuxt" })
        break;
      case "React":
        frameworks.push(
          { value: "Next.js", name: "Next.js" },
          { value: "Remix", name: "Remix" }
          )
        break;
      case "Svelte":
        frameworks.push({ value: "SvelteKit", name: "SvelteKit" })
        break;
      case "Solid":
        frameworks.push({ value: "SolidStart", name: "SolidStart" })
        break;
      case "Qwik":
        frameworks.push({ value: "Qwik City", name: "Qwik City" })
        break;
    }

    return frameworks
  }
  
  let tailwindCSS = false;
  let tauri = false;
</script>

<div class="dark">
  <Button on:click={() => (clickOutsideModal = true)}>Default modal</Button>

  <Modal title={`Create a new Project - ${projectName}`} bind:open={clickOutsideModal} autoclose outsideclose class="w-full">
    <Label>
      Project name
      <Input type="text" id="project_name" bind:value={projectName} required />
    </Label>
    
    <Label>
      Framework
      <Select class="mt-2" items={frameworks} bind:value={framework} on:change={() => metaFrameworks = getMetaFrameworks()} />
      <Checkbox bind:checked={typescript}>TypeScript</Checkbox>
    </Label>

    {#if metaFrameworks.length > 1}
      <Label>
        Meta Framework
        <Select class="mt-2" items={metaFrameworks} bind:value={metaFramework} />
      </Label>
    {/if}
    
    <Label>
      Other
      <Checkbox bind:checked={tailwindCSS}>TailwindCSS</Checkbox>
      <Checkbox bind:checked={tauri}>Tauri</Checkbox>
    </Label>

    <svelte:fragment slot="footer">
      <Button on:click={() => console.info(`${framework}`)}>Create Project</Button>
      <Button color="alternative">Decline</Button>
    </svelte:fragment>
  </Modal>
</div>