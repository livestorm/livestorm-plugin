export default `
<style>
/* Global style */
body {
  margin: 0px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 14px;
}

/* Buttons */
.btn {
  min-width: 100px;
  height: 40px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  padding: 6px 15px;
  background-color: #F4F3F8;
  color: #333334;
  cursor: pointer;
  font-size: 13px;
  transition: all .15s ease;
}
.btn:hover {
  background-color: #efeff4;
}

.btn-secondary {
  background-color: #E2ECFE;
  color: #2a5ee4;
}
.btn-secondary:hover {
  background-color: #E2ECFE;
  color: #214dbe;
}

.btn-primary {
  background-color: #2a5ee4;
  color: #fff;
}
.btn-primary:hover {
  background-color: #214dbe;
}

.btn-red {
  background-color: #f8eded;
  color: #e54538;
}
.btn-red:hover {
  background-color: #f4e3e2;
  color: #e54538;
}

.btn-green {
  background-color: #dff6d6;
  color: #57b158;
}
.btn-green:hover {
  background-color: #c7f3b8;
}

.btn-small {
  height: auto;
  width: auto;
  border-radius: 4px;
}

/* Forms */
.form {
  display: grid;
  grid-gap: 24px;
}

.input {
  border-width: 1px;
  border-color: #e5e5ea;
  background-color: #fff;
  color: #1c1c1e;
  width: 100%;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 14px;
  box-sizing: border-box;
  box-shadow: none;
  outline: none;
  height: 40px;
  border-style: solid;
}
.input:focus {
  border-color: #2a5ee4;
}
textarea.input {
  padding: 12px;
}

/* Texts */
.label {
  display: inline-block;
  margin-bottom: 0.25rem;
  font-weight: 500;
  color: #1c1c1e;
}
.value {
  color: #515054;
  margin-bottom: 5px;
}
</style>
`