class nooboard{
    constructor(){
        this.classes = {
            row: "nooboard_row",
            key: "nooboard_key",
            highlight: "nooboard_highlight"
        }
        this.keys = [
            "q,w,e,r,t,y,u,i,o,p",
            "a,s,d,f,g,h,j,k,l",
            "z,x,c,v,b,n,m",
            "space"
        ];
    }
    render(id){
        var keyboard = "";
        for(var i=0; i < this.keys.length; i++){
            keyboard += "<div class='"+this.classes.row+"'>";
            let keyboard_row = this.keys[i].split(",");
            for(var j=0; j < keyboard_row.length; j++){
                keyboard += "<div class='"+this.classes.key+"' id='" + keyboard_row[j] + "'>" + keyboard_row[j].toUpperCase() + "</div>";
            }
            keyboard += "</div>"
        }
        document.getElementById(id).innerHTML = keyboard;
    }

    highlight(id){
        try{
            let key = document.getElementById(this.parseKey(id));
            key.classList.add(this.classes.highlight);
        }catch(e){}
    }

    removehighlight(id){
        try{
            let key = document.getElementById(this.parseKey(id));
            key.classList.remove(this.classes.highlight);
        }catch(e){}
    }

    parseKey(key){
        switch(key){
            case " ":
                return "space";
            default:
                return key;
        }
    }
}

