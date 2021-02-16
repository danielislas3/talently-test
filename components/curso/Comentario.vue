<template>
  <div class="bg-white rounded flex p-2 pt-4">
    <i class="fas fa-user-circle text-4xl m-2 text-gray-700"></i>

    <div>
      <div class="flex justify-between">
        <p class="ml-6 curso_comment_name">User <span>1 Hora</span></p>

        <div class="dropdown">
          <i
            class="fas fa-ellipsis-v text-gray-700 cursor-pointer mr-1"
            @click="showDropdown"
          ></i>
          <div class="dropdown-content p-2" id="dropdown">
            <p class="m-2 ml cursor-pointer ">
              <i class="far fa-edit"></i>
              <span class="ml-4">Editar</span>
            </p>
            <p class="m-2 ml cursor-pointer">
              <i class="far fa-trash-alt"></i>
              <span class="ml-5">Eliminar</span>
            </p>
          </div>
        </div>
      </div>
      <p class="m-2 w-full pl-4 p-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente odit
        soluta autem illo expedita natus dolor, dignissimos consequuntur numquam
        obcaecati odio illum sequi assumenda qui consequatur. Veniam nostrum
        iusto similique.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showDropdown() {
      let elementt = document.querySelector("#dropdown");
      console.log(elementt);
      elementt.classList.toggle("show");

      window.onclick = function (event) {
        if (!event.target.matches(".fa-ellipsis-v")) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
              openDropdown.classList.remove("show");
            }
          }
        }
      };
    },
  },
};
</script>

<style>
</style>