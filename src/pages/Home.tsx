import { Content } from '#/components/Content'
import { SwiperSlide } from '#/components/Swiper'

export function Home() {
  return (
    <SwiperSlide>
      <Content>
        <h1>Swipy Nav</h1>

        <p>
          This demo implements an <em>app-like</em> layout with slides that can be navigated through <em>swipe gestures</em> or bottom bar clicks.
        </p>

        <p>
          One of the main goals is to provide a minimal boilerplate as a starting point for web applications with this layout style.<br />Finally, say goodbye to the 🍔 hamburger menu icon!
        </p>

        <p>
          Additionally, this serves as a playground for experimenting with various features and programming tools, which are listed below.
        </p>

        <h2>Tech Stack</h2>

        <p>
          This webapp is hosted on <em>GitHub Pages</em> with its source code available in the <a href="https://github.com/fibo/swipy-nav">fibo/swipy-nav</a> repository.
        </p>

        <h3>Testing</h3>

        <p>
          I must be candid: I'm not a fan of <em>jest</em>. It's one of the less effective testing tools I've encountered in my IT career since 2005. Rather than listing the reasons, I'll focus on presenting alternatives.
        </p>

        <p>
          For JavaScript backend runtime testing (i.e., Node.js), you can utilize the built-in <a href="https://nodejs.org/api/test.html">Node Test runner</a>. It eliminates the need for additional dependencies while providing comprehensive testing capabilities.
        </p>

        <p>
          On the other side, for JavaScript frontend runtime testing it does not make sense to me to mock the DOM especially now that there is an awesome alternative! So instead of using <em>jest</em> or <em>jsdom</em> let's try with a <strong>real</strong> browser.<br /> Introducing <a href="https://playwright.dev/docs/test-components">Playwright Tests for components</a>.
        </p>

        <h3>Styling</h3>

        <p>
          It may not sound like a super innovative approach but here I am using just pure CSS. No frameworks, no pre-processors. We are ready for that! We have <a href="https://caniuse.com/css-variables">CSS Custom properties</a>, they are awesome.
        </p>

        <p>
          This <a href="https://github.com/fibo/swipy-nav/blob/main/src/main.css">main.css</a> file is the starting point for all styles. It just contains the imports to styles splitted by categories and import to components styles. The build tool, in this case <em>Vite</em>, will do the rest.
        </p>
      </Content>
    </SwiperSlide>
  )
}
