export class Ingredient {
/* this is one way it can be done
public name: string;
public amount: number;
*/
/* instead of declaring properties above and then using them in the constructor 
and assigning the this. equivalent, can add the public accessor to the 
constructor and do it all in one line */
constructor(public name: string, public amount: number) {
/*this is required if done as above with declaration of items
this.name = name;
this.amount=amount;
*/
}
}