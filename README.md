# task-storage-counter
Usage example :
```html
<script src='https://cdn.jsdelivr.net/gh/tmpmachine/task-storage-counter@v1.0.0/taskcounter.min.js'></script>

<script> L = console.log </script>
<script>

  let x = new StorageTaskCounter('del-me');
  L(x.value); // 0
  
  x.add();
  L(x.value); // 1
  
  x.remove();
  L(x.value); // 0
  
</script>
```
