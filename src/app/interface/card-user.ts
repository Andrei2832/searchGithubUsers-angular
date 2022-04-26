import {User} from "./user";
import {Repos} from "./repos";

export interface CardUser {
  following: User[],
  followers: User[],
  repos: Repos[]
}
