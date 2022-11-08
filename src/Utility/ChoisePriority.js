function ChoisePriority(normalChecked,highChecked,urgentChecked,instantChecked) {
    if(normalChecked){
        return "normal"
    }
    if(highChecked){
        return "high"
    }
    if(urgentChecked){
        return "urgent"
    }
    if(instantChecked){
        return "instant"
    }
}

export default ChoisePriority