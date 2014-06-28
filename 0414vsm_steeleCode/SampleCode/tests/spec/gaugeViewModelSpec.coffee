describe "Gauge View Model", ->
  it "should start with current time", ->
    spyOn(GaugeViewModel.prototype, 'getDate').andReturn(new Date(2014,1,1,11,22,33))
    @vm = new GaugeViewModel()
    expect(@vm.hour()).toBe(11)
    expect(@vm.minute()).toBe(22)
    expect(@vm.second()).toBe(33)

  it "should set observables when update called", ->
    @vm = new GaugeViewModel()
    spyOn(@vm, 'getDate').andReturn(new Date(2014,1,1,16,17,18))
    @vm.update()
    expect(@vm.hour()).toBe(16)
    expect(@vm.minute()).toBe(17)
    expect(@vm.second()).toBe(18)
