<script lang="ts">
  import { Button, Checkbox, Input, Label, Modal, Select } from 'flowbite-svelte';

  let clickOutsideModal = true;

  let appName = "MyTauriApp"
  let windowTitle = appName
  let webAssets = "../public"
  let devURL = "http://localhost:8080"
  let devCommand = "npm run dev"
  let buildCommand = "npm run build"

  /* Create Project Modal */
  export let projectName: string;
  export let framework: string;
  export let typescript: boolean;
  export let metaFramework: string;
  export let tailwindCSS: boolean;
</script>

<div class="dark">
  <Button on:click={() => (clickOutsideModal = true)}>Default modal</Button>

  <Modal title={`Tauri Configuration - ${appName}`} bind:open={clickOutsideModal} autoclose outsideclose class="w-full">
    <Label>
      App name
      <Input type="text" id="app_name" bind:value={appName} required />
    </Label>
    
    <Label>
      Window Title
      <Input type="text" id="window_title" bind:value={windowTitle} required />
    </Label>
    
    <Label>
      Web Assets location (HTML/CSS/JS) - relative to the "<current dir>/src-tauri/tauri.conf.json" file that will be created
      <Input type="text" id="web_assets" bind:value={webAssets} required />
    </Label>
    
    <Label>
      URL of the Dev Server
      <Input type="text" id="dev_url" bind:value={devURL} required />
    </Label>
    
    <Label>
      Dev Command
      <Input type="text" id="dev_command" bind:value={devCommand} required />
    </Label>
    
    <Label>
      Build Command
      <Input type="text" id="build_command" bind:value={buildCommand} required />
    </Label>

    <svelte:fragment slot="footer">
      <Button on:click={() => console.info(`${framework}`)}>Create Project</Button>
      <Button color="alternative">Decline</Button>
    </svelte:fragment>
  </Modal>
</div>