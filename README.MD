# **Episode 04:-**

so we have copy pasted the RestaurantCard component multiple times but the how i can chhange the data inside ?? how i can make it dynamic ?? we can make it dynamic using **"props".**

**props stands for properties.**

what is component at the end of day its simple javascript functions and in case of functians we use to pass arrguments similarly like that we can pass props to a component.

**Array.join() property:-**

ex:-		{resData.card.card.info.cuisines.join(" , ")}

looping using map function of js on RestaurantCardres so that it shuld lood optimized:-

    <RestaurantCardresData={resList[0]}/>

    <RestaurantCardresData={resList[1]}/>

**by using belwo map code:-	no need to care about the number of iteams and all, our data will fill automatically simple.**

resList.map((restaurant) => (

    <RestaurantCardresData={restaurant}/>

    ))
