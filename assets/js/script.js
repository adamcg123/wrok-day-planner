const time = document.querySelector("#time");
const textArea = document.querySelector("#inputBox1")






let timeBlocks = [
    {
        time: "9AM",
        textArea:"",
        save:"saveBtn"

    },

    {
        time: "10AM",
        textArea:"",
        save:"saveBtn"

    },

    {
        time: "11AM",
        textArea:"",
        save:"saveBtn"

    },

    {
        time: "12PM",
        textArea:"",
        save:"saveBtn"

    },

    {
        time: "1PM",
        textArea:"",
        save:"saveBtn"

    },

    {
        time: "2PM",
        textArea:"",
        save:"saveBtn"

    },

    {
        time: "3PM",
        textArea:"",
        save:"saveBtn"

    },

    {
        time: "4PM",
        textArea:"",
        save:"saveBtn"

    },

    {
        time: "5PM",
        textArea:"",
        save:"saveBtn"

    },


];


for(i=0;i<timeBlocks.length;i++) {
    document.write(timeBlocks[i] + "<br/>");
}