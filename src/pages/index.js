import Link from "next/link";
import dbConnect from "../lib/dbConnect";
import Pet from "../models/Pet";
import Hours from "../components/Hours"; 

// TODO: Import Hours component

const Index = ({ pets }) => {

  return (
    <>

      {/*  TODO: Display Hours component */}
      <Hours /> {/* Muestra el componente Hours  */}
      

      <div className="dog-image" style={{ textAlign: "center", margin: "20px 0" }}>
        <h2 style={{ marginBottom: "10px" }}>Perro de Noel Muñoz Ramírez</h2> 
        <img 
          src="https://rukminim2.flixcart.com/image/850/1000/kzsqykw0/poster/f/v/f/small-cute-dog-poster-multicolour-photo-paper-print-pomeranian-original-imagbqa4gddkyggd.jpeg?q=90&crop=false" 
          alt="Cute Dog" 
          style={{ width: "300px", height: "auto", borderRadius: "10px" }} 
        />
      </div>

      {/* Create a card for each pet */}
      {pets.map((pet) => (
        <div key={pet._id}>
          <div className="card">
            <img src={pet.image_url} />
            <h5 className="pet-name">{pet.name}</h5>
            <div className="main-content">
              <p className="pet-name">{pet.name}</p>
              <p className="owner">Owner: {pet.owner_name}</p>

              {/* Extra Pet Info: Likes and Dislikes */}
              <div className="likes info">
                <p className="label">Likes</p>
                <ul>
                  {pet.likes.map((data, index) => (
                    <li key={index}>{data} </li>
                  ))}
                </ul>
              </div>
              <div className="dislikes info">
                <p className="label">Dislikes</p>
                <ul>
                  {pet.dislikes.map((data, index) => (
                    <li key={index}>{data} </li>
                  ))}
                </ul>
              </div>

              <div className="btn-container">
                <Link href="/[id]/edit" as={`/${pet._id}/edit`}>
                  <button className="btn edit">Edit</button>
                </Link>
                <Link href="/[id]" as={`/${pet._id}`}>
                  <button className="btn view">View</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await Pet.find({});
  const pets = result.map((doc) => {
    const pet = doc.toObject();
    pet._id = pet._id.toString();
    return pet;
  });

  return { props: { pets: pets } };
}

export default Index;