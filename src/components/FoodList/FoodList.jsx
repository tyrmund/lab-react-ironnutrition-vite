import FoodBox from "../FoodBox/FoodBox"

const FoodList = ({ foods, handleDelete }) => {
    return (
        <div>
            {foods.map((eachFood) =>
                <FoodBox
                    key={eachFood.id}
                    {...eachFood}
                    handleDelete={handleDelete}
                />
            )}
        </div>
    )
}

export default FoodList