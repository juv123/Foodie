const Contact=()=>{
    return(
        <div>
            <h2 className="underline font-bold p-4 m-4">Contact Us</h2>
            <form>
                <input type="text" className="bg-cyan-50 p-1 m-2 border-2 w-15" placeholder="Name"/>
                <input type="text" className="bg-cyan-50 p-1 m-2 border-2 w-15" placeholder="Message"/>
                 <button className="bg-gray-300 rounded w-20 p-1 m-2 w-15 border ">Submit</button>
            </form>
        </div>
    )
}
export default Contact;