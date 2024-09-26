import OurBlogPage from "@/components/common/Pages/Our-Blog";
import { Suspense } from "react";
import Loading from "../../loading";

export default function OurBlog(){
    return(
        <Suspense fallback={<Loading />}>
      <OurBlogPage initialData={[]} />
    </Suspense>
    )
}