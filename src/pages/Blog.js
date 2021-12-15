import { Link, Outlet } from "react-router-dom";
export default function Blog() {
  return (
    <div className="container w-75 mx-auto">
      <Link to="/blog/edit">
       Edit
      </Link>
      <h1 className="text-center">Blog Title</h1>
      <h2 className="text-center">Catching phrase for the blog</h2>
      <img src="./assets/image1.jpg" alt="..." className="blog-image"/>
      <div>
        <h6>Writer</h6>
        <small>Date</small>
      </div>

      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          dolore. Laborum, possimus obcaecati eligendi consequatur nisi, quae
          harum error enim aspernatur molestias aut alias provident similique
          odio distinctio repellendus vel? Temporibus cum distinctio quia
          doloribus? Nihil vitae temporibus ullam porro sunt at sed ipsam dicta.
          Rem dolorum, corporis, tempore eum asperiores totam praesentium,
          eveniet perspiciatis perferendis mollitia explicabo delectus
          consequatur. Ratione aliquid beatae nam commodi, est quae unde
          temporibus consequuntur nulla nesciunt expedita repudiandae aliquam
          delectus, ea rem nihil. In autem, assumenda accusamus ipsum dicta ipsa
          hic fuga magnam placeat. Ad nisi ea sunt autem repellat nesciunt.
        </p>
      </div>

      <div>
        <h4>Comments</h4>
      </div>

      <div>
        <h4>Related Content</h4>
      </div>
      <Outlet>
        
      </Outlet>
    </div>
  );
}
