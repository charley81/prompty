import Feed from '@components/feed'

export default function HomePage() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        We Got
        <br className="md:max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Prompty is an open-source AI prompting tool for your team to discover,
        create and share creative prompts
      </p>

      {/* feed */}
      <Feed />
    </section>
  )
}
