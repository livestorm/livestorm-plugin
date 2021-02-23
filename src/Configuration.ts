const config: any = {
  data: {
    url: '*'
  },

  set(newConfig) {
    this.data = {
      ...this.data,
      ...newConfig
    }
  }
}

export default config