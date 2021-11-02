<template>
  <div class="SendSentryEvents">

    <h1>Send Sentry Events</h1>
    <ol>
      <li><button v-on:click="undefinedIdentifier">Undefined identifier</button></li>
      <li><button v-on:click="customError">Custom error</button></li>
    </ol>

    <div> {{ divText }} </div>

  </div>
</template>

<script>



export default {
  name: 'SendSentryEvents',

  data: function() {
    return {
        divText: ""
    };
  },


  methods: {

      undefinedIdentifier: function() {
        try {
          var a = variableName.property;
        }
        catch (exception) {
          console.log("exception throw");
          console.log(exception);
          this.divText = exception.toString();
          throw exception;
        }
      },

      customError: function() {
        var exception = new Error("Custom error");
        console.log(exception);
        this.divText = exception.toString();
        throw exception;
      }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
