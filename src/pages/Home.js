import { Outlet } from "react-router-dom";
import { Navbar} from "../components";
export default function Home({logged, setLogged}) {
  return (
  <div>
    <Navbar setLogged={setLogged} />
    <Outlet />
  </div>
  )
}


// logged ? (
//     <>
  //     

  //     <Blogs blogs={blogs} />
  //     <Routes>
  //       <Route path="/blogs">
          
          
  //       </Route>
  //     </Routes>
  //   </>
  // ) : (
  //   <>
  //     <Navbar setLogged={setLogged} />
  //     <Routes>
  //       <Route path="/">
  //         <Route index element={<Blogs />} />
  //         <Route path="blog">
  //           <Route path=":blogId" element={<Blog />} />
  //         </Route>
  //       </Route>
  //       <Route path="login" element={<Login setLogged={setLogged} />} />
  //       <Route path="signup" element={<SignUp />} />

  //       <Route path="*" element={<PageNotFound />} />
  //     </Routes>
  //   </>
  // );