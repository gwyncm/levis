addFloor: function () {
    baseFetch(URL1(),'POST', this.newfloor).then(
        response => { 
            this.newfloor.id = response.id 
            this.floors.push(this.newfloor)
        })
        .catch(result => console.log("addFloor",result))
}

<tr>
<td><input type="text" class="input-sm" v-model="newfloor.name" /></td>
<td>{{ newfloor.id }}</td>
<td><input type="text" class="input-sm" v-model="newfloor.image" /></td>
<td><input type="text" class="input-sm" v-model="newfloor.desc" /></td>
<td><button class="btn btn-success btn-sm" @click="addFloor">Add</button></td>
</tr>

