import Header from "@/components/Header";
import PreviewImg from "@/components/PreviewImg";
import SideNavLayout from "@/components/layouts/sidenav-layout";

export default function FormaLizingProcessesPage() {
  return (
    <SideNavLayout selected="blog">
      <div className="prose prose-invert">
        <Header>Formalizing Loose Processes</Header>
        <h2>Non-spoken rules</h2>
        <p>
          There are certain &quot;non-spoken&quot; rules that happen naturally
          as a project grows in size.
        </p>
        <p>
          These rules are not documented anywhere, nobody talks about them
          regularly, but they do exist. Some certain day you&apos;ll break one
          of these unspoken rules and a more senior teammate will come to you
          and say &quot;Hey, you can&apos;t do that&quot; or &quot;We do that
          differently&quot;.
        </p>
        <p>
          There's usually a de facto way of doing things in a project that
          everybody gets to know eventually (the unspoken rules); it's usually
          trivial work or simple processes that are often adopted out of
          repetition. &quot;out of habit&quot;. Some times these processes can
          be done in a few different ways but the &quot;escence&quot; of the
          task remains.
        </p>
        <h2>The problem with loose processes</h2>
        <p>
          While a team is small enough, and everybody is in the same page, this
          is more than ok; &quot;Communication over Documentation&quot;; many
          startups get away with chaos because their developers are good
          communicating and good technichally. But as the project grows in size,
          the communication grows in complexity more than the processes
          themselves. At the end, there's only so much time a developer has to
          interact with other team members a day, and also be productive.
        </p>
        <p>
          One more problem with these loose processes is that people's
          interpretation of the process can be different. One problem I've seen
          is that the very expectations of the role may not be clear for
          everybody the same way; I've seen brilliant developers struggle with
          performing at their best bacause these loose processes are on the way.
          They might think they are givin their best and focusing on the wrong
          bits of work.
        </p>
        <h2>Writing down the process</h2>
        <p>
          There are three main questions you want to answer in order write down
          the current process:
          <ol>
            <li>
              Is it a problem? Do you really need to be thinking on this? Is
              this a pain point identified by yourself or another person in the
              team?
            </li>
            <li>What is the goal of the process? What is the end result?</li>
            <li>
              Who are the actors? What roles are involved in the process? and
              What do they do?
            </li>
            <li>
              What are the expectations from everyone? What is the expected
              involvement from each role?
            </li>
          </ol>
        </p>
        <h3>1. Is it a problem?</h3>
        <h4>Identifying the pain point</h4>
        <p>
          Retrospectives are the best place to identify pain points. This is
          also when you realize if you have some loose processes that would be
          better written down, or even better: improved.
        </p>
        <p>
          You can tell when a process is the problem when a person is a
          bottleneck for everyone else. Or when more than one person is confused
          about how to perform a task.
        </p>
        <h4>Is it worth it?</h4>
        <p>
          Not all the processes need to be written to the letter. Some simple
          processes are better left loose. We are not trying to turn the
          development team into a bureaucracy. Before going out your way
          documenting, make sure it will solve a problem for more than person on
          the team. Sometimes a simple knowledge sharing session is enough.
        </p>
        <p>
          For the development workflow, there are many comments of unhappiness
          happening. and spicy comments like: &quot;things are not clear&quot;,
          &quot;I don&quot;t know what they want&quot; or &quot;why does it take
          so long to change a button?&quot;. So, it is a problem.
        </p>
        <h3>2. What is the goal of the process?</h3>
        <p>
          Some processes are very straightforward. for example: functional
          tests. Or Pull Requests. No need to write down what a PR is.
        </p>
        <p>
          Nevertheless, there are processes that are abstract, composited of
          many other processes. Like the Development Workflow.
        </p>
        <p>
          The Development workflow is a good example of a loose process in many
          companies. It is kind of an umbrella term for all the many tiny
          processes and activities that a developer performs. The following
          diagram is the result of answering the questions above:
        </p>
        <PreviewImg src="/ux-dev-workflow.png" alt="development diagram" />
        <p>
          As seen in the diagram, The development workflow includes many
          activities that are not related directly with the code itself. While
          in the diagram is clear that coding is just a small activity, this
          wouldn't seem to be the logical conclusion that many people would get
          when they think of the activities of a developer at first. Even
          developers themselves.
        </p>
        <p>
          The goal of the process is to deliver software. To take it from
          inseption to production. That's important. And by making the process
          explicit, we can make sure that we understand the capacity of the team
          as well as the team can understand what are the expectations from
          them. Before having the diagram, we have the first two questions
          answered.
          <ol>
            <li>
              It is a problem, because neither the developers nor the
              stakeholders know where the development time goes
            </li>
            <li>
              The goal of the process is to deliver software transparently
            </li>
          </ol>
        </p>
        <h3>3. Who are the actors?</h3>
        <p>
          The actors are the people that has influence in the process. Anyone
          that can change the outcome of the execution of the process.
        </p>
        <p>
          In the case of the development workflow, the actors are: The
          developers and &quot;others&quot; (QA, Product, Design, etc). Because
          we want the developers perspective, we are focusing in the developers
          activities
        </p>
        <PreviewImg
          src="/dev-actors.png"
          alt="Actor's involvement in the SDLC"
        />
        <h3>4. What are the expectations from everyone?</h3>
        <p>
          The expectations from all the actors determine what are the
          fundamental pieces of work. you can start putting together the steps
          of the process by answering the questions:
          <ul>
            <li>How do we fulfill the expectations of the actors? and</li>
            <li>Are these expectations realistic? Sensible? Clear?</li>
          </ul>
        </p>
        <PreviewImg
          src="/developer-activities.png"
          alt="developer expectations by seniority"
        />
        <p>
          The diagram above shows an example of the activities that need to be
          done by developers to deliver a product. These are the expectations
          from the product team, or the customers directly.
        </p>
        <p>
          Depending on the organization of the company and the teams these
          diagrams could look completely different. This is an example for a
          growing startup that has little resources and small teams are not only
          multidisciplinary from person to person, but also a single team member
          absorbs responsibilities that are traditionally for architects or for
          other roles like Product owners or testers.
        </p>
        <PreviewImg
          src="/developer-ownership.png"
          alt="Developer ownership by seniority"
        />
        <h2>Conclusion</h2>
        <p>
          Writing down the processes makes sense when the processes are getting
          on the way or some terminology could be open to interpretation. In the
          developer workflow example, it's very easy to assume that developers
          will need to focus only on delivering code, but once we get all the
          pieces together, we can see that the process is larger and the code is
          just a small part of it.
        </p>
        <h3>The first step is accepting you have a problem</h3>
        <p>
          The first and hardest step is identifying there's a problem. Many
          times this flies over our heads simply because we are very used to how
          things work. But maybe, now that everyone knows the workflow, we can
          start thinking about improving it.
        </p>
      </div>
    </SideNavLayout>
  );
}
