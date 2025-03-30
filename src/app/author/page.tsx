import Header from "@/components/Header";
import SideNavLayout from "@/components/layouts/sidenav-layout";

export default function Author() {
  return (
    <SideNavLayout selected="author">
      <div>
        <Header>About the Author</Header>
        <div className="flex gap-8 items-center">
          <img
            src="/author.jpeg"
            alt="Daniel's Portrait"
            className="w-32 h-32 rounded-full border-white border-opacity-40 border-4"
          />
          <div>
            <h3 className="text-2xl font-bold text-white text-opacity-75 mb-4">
              I am{" "}
              <span className="text-white text-opacity-100">Daniel Arauz.</span>
            </h3>
            <p className="text-white text-opacity-75">
              I&apos;ve been developing stuff since 2012.
            </p>
          </div>
        </div>
      </div>
    </SideNavLayout>
  );
}
