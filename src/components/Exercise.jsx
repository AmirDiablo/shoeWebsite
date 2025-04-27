const Exercise = () => {
    return ( 
        <div className="grid grid-cols-2 grid-rows-3">
            <div className="col-start-1 col-end-2 row-start-1 row-end-4 bg-amber-300 rounded-2xl"><img src="./products/shoes/anotherColor.jpg" /></div>
            <div className="col-start-2 col-end-3 row-start-1 row-end-2 bg-blue-600 rounded-2xl p-2">2</div>
            <div className="col-start-2 col-end-3 row-start-2 row-end-3 bg-fuchsia-500 rounded-2xl p-2">3</div>
            <div className="col-start-2 col-end-3 row-start-3 row-end-4 bg-red-600 rounded-2xl p-2">4</div>
        </div> 
    );
}
 
export default Exercise;