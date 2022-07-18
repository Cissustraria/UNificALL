<script>
    import "../app.css";
    import UnallItem from "../lib/unall-item.svelte";

    const title = "UnificALL | new ";
</script>

<style>
    .unall {
        width: 100%;
        max-width: 42rem;
        margin: 4rem auto 0 auto;
    }
    .new {
        margin: 0 0 0.5rem 0;
    }

    .new input {
        font-size: 28px;
        width: 100%;
        padding:0.5em 1 em 0.3em 1em;
        box-sizing: border-box;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
        text-align: center;
    }

    .unall :global(input) {
        border: 1px solid transparent;
    }

    .unall :global(input:focus-visible) {
        box-shadow: insert 1px 1px 6px rgba(0, 0, 0, 0.1);
        border: 1px solid #ff3e00 !important;
        outline: none;
    }
</style>

<svelte:head>
    <title>{title}</title>
</svelte:head>



<div class="unall">
    <h1>{title}</h1>
    
    <form action="/unall.json" method="POST" class="new">
        <input type="text" name="text" aria-label="Agregar a UN_ALL" placeholder="+ type a agregar a UN_ALL"/>
    </form>
    
    <UnallItem></UnallItem>
    <UnallItem></UnallItem>
    <UnallItem></UnallItem> 
</div>
