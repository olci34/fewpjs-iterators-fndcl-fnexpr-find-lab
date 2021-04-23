function superbowlWin(objects) {
    const w = objects.find(obj => obj.result === "W")
    if (w && w.year) {
        return w.year
    } else {
        return undefined
    }
}

const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ] 

  superbowlWin(record)