export interface Group{
   id: String,
   name: String,
   picture: {
       data: {
        height: Number
        is_silhouette: Boolean
        url: String,
        width: Number
       }
   }
}