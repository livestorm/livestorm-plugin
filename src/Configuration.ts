const config: any = {
  data: {
    url: '*'
  },

  set(config) {
    this.data = {
      ...this.data,
      ...config
    }
  }
}


export default config