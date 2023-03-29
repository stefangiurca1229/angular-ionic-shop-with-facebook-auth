import { Reaction } from "./reaction.interface";

export interface Feed{
    from: {
      name: String,
      id: String
    }
comments: {
    data: Comment[]
},
full_picture: String,
id: String,
message: String,
reactions: {
    data: Reaction[]
},
updated_time: String,
poz_reactions: number,
negative_reactions: number
}