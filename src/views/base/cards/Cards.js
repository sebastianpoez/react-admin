import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCardImage,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CListGroup,
  CListGroupItem,
  CNav,
  CNavItem,
  CNavLink,
  CCol,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink, Example } from 'src/reusable'

const Cards = () => {
  // const [collapsed, setCollapsed] = React.useState(true)
  // const [showCard, setShowCard] = React.useState(true)

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Example</small>
          </CCardHeader>
          <CCardBody>
            <p class="text-medium-emphasis small">
              Cards are built with as little markup and styles as possible but still manage to
              deliver a bunch of control and customization. Built with flexbox, they offer easy
              alignment and mix well with other CoreUI components. Cards have no top, left, and
              right margins by default, so use{' '}
              <a href="https://coreui.io/docs/utilities/spacing" class="css-0">
                spacing utilities
              </a>{' '}
              as needed. They have no fixed width to start, so they'll fill the full width of its
              parent.
            </p>
            <p class="text-medium-emphasis small">
              Below is an example of a basic card with mixed content and a fixed width. Cards have
              no fixed width to start, so they'll naturally fill the full width of its parent
              element.
            </p>
            <Example href="https://coreui.io/react/docs/4.0/components/card">
              <CCard style={{ width: '18rem' }}>
                <CCardImage
                  component="svg"
                  orientation="top"
                  className="docs-placeholder-img"
                  width="100%"
                  height="180"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Image cap"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                  <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                    Image cap
                  </text>
                </CCardImage>
                <CCardBody>
                  <CCardTitle>Card title</CCardTitle>
                  <CCardText>
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                  </CCardText>
                  <CButton href="#">Go somewhere</CButton>
                </CCardBody>
              </CCard>
            </Example>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Body</small>
          </CCardHeader>
          <CCardBody>
            <p class="text-medium-emphasis small">
              The main block of a card is the <code class="css-0">&lt;CCardBody&gt;</code>. Use it
              whenever you need a padded section within a card.
            </p>
            <Example href="https://coreui.io/react/docs/4.0/components/card/#body">
              <CCard>
                <CCardBody>This is some text within a card body.</CCardBody>
              </CCard>
            </Example>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Titles, text, and links</small>
          </CCardHeader>
          <CCardBody>
            <p class="text-medium-emphasis small">
              Card titles are managed by <code class="css-0">&lt;CCardTitle&gt;</code> component.
              Identically, links are attached and collected next to each other by{' '}
              <code class="css-0">&lt;CCardLink&gt;</code> component.
            </p>
            <p class="text-medium-emphasis small">
              Subtitles are managed by <code class="css-0">&lt;CCardSubtitle&gt;</code> component.
              If the <code class="css-0">&lt;CCardTitle&gt;</code> also, the{' '}
              <code class="css-0">&lt;CCardSubtitle&gt;</code> items are stored in a{' '}
              <code class="css-0">&lt;CCardBody&gt;</code> item, the card title, and subtitle are
              arranged rightly.
            </p>
            <Example href="https://coreui.io/react/docs/4.0/components/card/#titles-text-and-links">
              <CCard style={{ width: '18rem' }}>
                <CCardBody>
                  <CCardTitle>Card title</CCardTitle>
                  <CCardSubtitle className="mb-2 text-muted">Card subtitle</CCardSubtitle>
                  <CCardText>
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                  </CCardText>
                  <CCardLink href="#">Card link</CCardLink>
                  <CCardLink href="#">Another link</CCardLink>
                </CCardBody>
              </CCard>
            </Example>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Images</small>
          </CCardHeader>
          <CCardBody>
            <p class="text-medium-emphasis small">
              <code class="css-0">.card-img-top</code> places a picture to the top of the card. With{' '}
              <code class="css-0">.card-text</code>, text can be added to the card. Text within{' '}
              <code class="css-0">.card-text</code> can additionally be styled with the regular HTML
              tags.
            </p>
            <Example href="https://coreui.io/react/docs/4.0/components/card/#images">
              <CCard style={{ width: '18rem' }}>
                <CCardImage
                  component="svg"
                  orientation="top"
                  className="docs-placeholder-img"
                  width="100%"
                  height="180"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Image cap"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                  <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                    Image cap
                  </text>
                </CCardImage>
                <CCardBody>
                  <CCardText>
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                  </CCardText>
                </CCardBody>
              </CCard>
            </Example>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>List groups</small>
          </CCardHeader>
          <CCardBody>
            <p class="text-medium-emphasis small">
              Create lists of content in a card with a flush list group.
            </p>
            <Example href="https://coreui.io/react/docs/4.0/components/card/#list-groups">
              <CRow>
                <CCol lg={4}>
                  <CCard>
                    <CListGroup flush>
                      <CListGroupItem>Cras justo odio</CListGroupItem>
                      <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                      <CListGroupItem>Vestibulum at eros</CListGroupItem>
                    </CListGroup>
                  </CCard>
                </CCol>
                <CCol lg={4}>
                  <CCard>
                    <CCardHeader>Header</CCardHeader>
                    <CListGroup flush>
                      <CListGroupItem>Cras justo odio</CListGroupItem>
                      <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                      <CListGroupItem>Vestibulum at eros</CListGroupItem>
                    </CListGroup>
                  </CCard>
                </CCol>
                <CCol lg={4}>
                  <CCard>
                    <CListGroup flush>
                      <CListGroupItem>Cras justo odio</CListGroupItem>
                      <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                      <CListGroupItem>Vestibulum at eros</CListGroupItem>
                    </CListGroup>
                    <CCardFooter>Footer</CCardFooter>
                  </CCard>
                </CCol>
              </CRow>
            </Example>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Kitchen sink</small>
          </CCardHeader>
          <CCardBody>
            <p class="text-medium-emphasis small">
              Combine and match many content types to build the card you need, or throw everything
              in there. Shown below are image styles, blocks, text styles, and a list group—all
              wrapped in a fixed-width card.
            </p>
            <Example href="https://coreui.io/react/docs/4.0/components/card/#kitchen-sink">
              <CCard style={{ width: '18rem' }}>
                <CCardImage
                  component="svg"
                  orientation="top"
                  className="docs-placeholder-img"
                  width="100%"
                  height="180"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Image cap"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                  <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                    Image cap
                  </text>
                </CCardImage>
                <CCardBody>
                  <CCardTitle>Card title</CCardTitle>
                  <CCardText>
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                  </CCardText>
                </CCardBody>
                <CListGroup flush>
                  <CListGroupItem>Cras justo odio</CListGroupItem>
                  <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                  <CListGroupItem>Vestibulum at eros</CListGroupItem>
                </CListGroup>
                <CCardBody>
                  <CCardLink href="#">Card link</CCardLink>
                  <CCardLink href="#">Another link</CCardLink>
                </CCardBody>
              </CCard>
            </Example>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Header and footer</small>
          </CCardHeader>
          <CCardBody>
            <p class="text-medium-emphasis small">
              Add an optional header and/or footer within a card.
            </p>
            <Example href="https://coreui.io/react/docs/4.0/components/card/#header-and-footer">
              <CCard>
                <CCardHeader>Header</CCardHeader>
                <CCardBody>
                  <CCardTitle>Special title treatment</CCardTitle>
                  <CCardText>
                    With supporting text below as a natural lead-in to additional content.
                  </CCardText>
                  <CButton href="#">Go somewhere</CButton>
                </CCardBody>
              </CCard>
            </Example>
            <p class="text-medium-emphasis small">
              Card headers can be styled by adding ex. <code class="css-0">component="h5"</code>.
            </p>
            <Example href="https://coreui.io/react/docs/4.0/components/card/#header-and-footer">
              <CCard>
                <CCardHeader component="h5">Header</CCardHeader>
                <CCardBody>
                  <CCardTitle>Special title treatment</CCardTitle>
                  <CCardText>
                    With supporting text below as a natural lead-in to additional content.
                  </CCardText>
                  <CButton href="#">Go somewhere</CButton>
                </CCardBody>
              </CCard>
            </Example>
            <Example href="https://coreui.io/react/docs/4.0/components/card/#header-and-footer">
              <CCard>
                <CCardHeader>Quote</CCardHeader>
                <CCardBody>
                  <blockquote class="blockquote mb-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat
                      a ante.
                    </p>
                    <footer class="blockquote-footer">
                      Someone famous in <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </CCardBody>
              </CCard>
            </Example>
            <Example href="https://coreui.io/react/docs/4.0/components/card/#header-and-footer">
              <CCard className="text-center">
                <CCardHeader>Header</CCardHeader>
                <CCardBody>
                  <CCardTitle>Special title treatment</CCardTitle>
                  <CCardText>
                    With supporting text below as a natural lead-in to additional content.
                  </CCardText>
                  <CButton href="#">Go somewhere</CButton>
                </CCardBody>
                <CCardFooter className="text-muted">2 days ago</CCardFooter>
              </CCard>
            </Example>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Body</small>
          </CCardHeader>
          <CCardBody>
            <p class="text-medium-emphasis small">
              Cards assume no specific <code class="css-0">width</code> to start, so they'll be 100%
              wide unless otherwise stated. You can adjust this as required with custom CSS, grid
              classes, grid Sass mixins, or services.
            </p>
            <h3>Using grid markup</h3>
            <p class="text-medium-emphasis small">
              Using the grid, wrap cards in columns and rows as needed.
            </p>
            <Example href="https://coreui.io/react/docs/4.0/components/card/#sizing">
              <CRow>
                <CCol sm="6">
                  <CCard>
                    <CCardBody>
                      <CCardTitle>Special title treatment</CCardTitle>
                      <CCardText>
                        With supporting text below as a natural lead-in to additional content.
                      </CCardText>
                      <CButton href="#">Go somewhere</CButton>
                    </CCardBody>
                  </CCard>
                </CCol>
                <CCol sm="6">
                  <CCard>
                    <CCardBody>
                      <CCardTitle>Special title treatment</CCardTitle>
                      <CCardText>
                        With supporting text below as a natural lead-in to additional content.
                      </CCardText>
                      <CButton href="#">Go somewhere</CButton>
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </Example>
            <h3>Using utilities</h3>
            <p class="text-medium-emphasis small">
              Use some of{' '}
              <a href="https://coreui.io/docs/utilities/sizing/" class="css-0">
                available sizing utilities
              </a>{' '}
              to rapidly set a card's width.
            </p>
            <Example href="https://coreui.io/react/docs/4.0/components/card/#sizing">
              <CCard className="w-75">
                <CCardBody>
                  <CCardTitle>Card title</CCardTitle>
                  <CCardText>
                    With supporting text below as a natural lead-in to additional content.
                  </CCardText>
                  <CButton href="#">Go somewhere</CButton>
                </CCardBody>
              </CCard>
              <CCard className="w-50">
                <CCardBody>
                  <CCardTitle>Card title</CCardTitle>
                  <CCardText>
                    With supporting text below as a natural lead-in to additional content.
                  </CCardText>
                  <CButton href="#">Go somewhere</CButton>
                </CCardBody>
              </CCard>
            </Example>
            <strong>Using custom CSS</strong>
            <p class="text-medium-emphasis small">
              Use custom CSS in your stylesheets or as inline styles to set a width.
            </p>
            <Example href="https://coreui.io/react/docs/4.0/components/card/#sizing">
              <CCard style={{ width: '18rem' }}>
                <CCardBody>
                  <CCardTitle>Special title treatment</CCardTitle>
                  <CCardText>
                    With supporting text below as a natural lead-in to additional content.
                  </CCardText>
                  <CButton href="#">Go somewhere</CButton>
                </CCardBody>
              </CCard>
            </Example>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Text alignment</small>
          </CCardHeader>
          <CCardBody>
            <p class="text-medium-emphasis small">
              You can instantly change the text arrangement of any card—in its whole or specific
              parts—with{' '}
              <a href="https://coreui.io/docs/utilities/text/#text-alignment" class="css-0">
                text align classes
              </a>
              .
            </p>
            <Example href="https://coreui.io/react/docs/4.0/components/card/#text-alignment">
              <CCard style={{ width: '18rem' }}>
                <CCardBody>
                  <CCardTitle>Special title treatment</CCardTitle>
                  <CCardText>
                    With supporting text below as a natural lead-in to additional content.
                  </CCardText>
                  <CButton href="#">Go somewhere</CButton>
                </CCardBody>
              </CCard>
              <CCard className="text-center" style={{ width: '18rem' }}>
                <CCardBody>
                  <CCardTitle>Special title treatment</CCardTitle>
                  <CCardText>
                    With supporting text below as a natural lead-in to additional content.
                  </CCardText>
                  <CButton href="#">Go somewhere</CButton>
                </CCardBody>
              </CCard>
              <CCard className="text-end" style={{ width: '18rem' }}>
                <CCardBody>
                  <CCardTitle>Special title treatment</CCardTitle>
                  <CCardText>
                    With supporting text below as a natural lead-in to additional content.
                  </CCardText>
                  <CButton href="#">Go somewhere</CButton>
                </CCardBody>
              </CCard>
            </Example>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Navigation</small>
          </CCardHeader>
          <CCardBody>
            <p class="text-medium-emphasis small">
              Add some navigation to a <code class="css-0">&lt;CCardHeader&gt;</code> with our{' '}
              <code class="css-0">&lt;CNav&gt;</code> component.
            </p>
            <Example href="https://coreui.io/react/docs/4.0/components/card/##navigation">
              <CCard className="text-center">
                <CCardHeader>
                  <CNav variant="tabs" className="card-header-tabs">
                    <CNavItem>
                      <CNavLink href="#" active>
                        Active
                      </CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink href="#">Link</CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink href="#" disabled>
                        Disabled
                      </CNavLink>
                    </CNavItem>
                  </CNav>
                </CCardHeader>
                <CCardBody>
                  <CCardTitle>Special title treatment</CCardTitle>
                  <CCardText>
                    With supporting text below as a natural lead-in to additional content.
                  </CCardText>
                  <CButton href="#">Go somewhere</CButton>
                </CCardBody>
              </CCard>
            </Example>
            <Example href="https://coreui.io/react/docs/4.0/components/card/##navigation">
              <CCard className="text-center">
                <CCardHeader>
                  <CNav variant="pills" className="card-header-pills">
                    <CNavItem>
                      <CNavLink href="#" active>
                        Active
                      </CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink href="#">Link</CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink href="#" disabled>
                        Disabled
                      </CNavLink>
                    </CNavItem>
                  </CNav>
                </CCardHeader>
                <CCardBody>
                  <CCardTitle>Special title treatment</CCardTitle>
                  <CCardText>
                    With supporting text below as a natural lead-in to additional content.
                  </CCardText>
                  <CButton href="#">Go somewhere</CButton>
                </CCardBody>
              </CCard>
            </Example>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Image caps</small>
          </CCardHeader>
          <CCardBody>
            <p class="text-medium-emphasis small">
              Similar to headers and footers, cards can include top and bottom "image caps"—images
              at the top or bottom of a card.
            </p>
            <Example href="https://coreui.io/react/docs/4.0/components/card/#image-caps">
              <CRow>
                <CCol lg={6}>
                  <CCard className="mb-3">
                    <CCardImage
                      component="svg"
                      orientation="top"
                      className="docs-placeholder-img"
                      width="100%"
                      height="180"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Image cap"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#868e96"></rect>
                      <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                        Image cap
                      </text>
                    </CCardImage>
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </CCardText>
                      <CCardText>
                        <small class="text-muted">Last updated 3 mins ago</small>
                      </CCardText>
                    </CCardBody>
                  </CCard>
                </CCol>
                <CCol lg={6}>
                  <CCard className="mb-3">
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </CCardText>
                      <CCardText>
                        <small class="text-muted">Last updated 3 mins ago</small>
                      </CCardText>
                    </CCardBody>
                    <CCardImage
                      component="svg"
                      orientation="bottom"
                      className="docs-placeholder-img"
                      width="100%"
                      height="180"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Image cap"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#868e96"></rect>
                      <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                        Image cap
                      </text>
                    </CCardImage>
                  </CCard>
                </CCol>
              </CRow>
            </Example>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Card styles</small>
          </CCardHeader>
          <CCardBody>
            <p class="text-medium-emphasis small">
              Cards include various options for customizing their backgrounds, borders, and color.
            </p>
            <h3>Background and color</h3>
            <p class="text-medium-emphasis small">
              Use <code class="css-0">color</code> property to change the appearance of a card.
            </p>
            <Example href="https://coreui.io/react/docs/4.0/components/card/#background-and-color">
              <CRow>
                {[
                  { color: 'primary', textColor: 'white' },
                  { color: 'secondary', textColor: 'white' },
                  { color: 'success', textColor: 'white' },
                  { color: 'danger', textColor: 'white' },
                  { color: 'warning' },
                  { color: 'info', textColor: 'white' },
                  { color: 'light' },
                  { color: 'dark', textColor: 'white' },
                ].map((item, index) => (
                  <CCol lg={4}>
                    <CCard
                      color={item.color}
                      textColor={item.textColor}
                      className="mb-3"
                      key={index}
                    >
                      <CCardHeader>Header</CCardHeader>
                      <CCardBody>
                        <CCardTitle>{item.color} card title</CCardTitle>
                        <CCardText>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </CCol>
                ))}
              </CRow>
            </Example>
            <h3>Border</h3>
            <p class="text-medium-emphasis small">
              Use{' '}
              <a href="https://coreui.io/docs/utilities/borders/" class="css-0">
                border utilities
              </a>{' '}
              to change just the <code class="css-0">border-color</code> of a card. Note that you
              can set <code class="css-0">textColor</code> property on the{' '}
              <code class="css-0">&lt;CCard&gt;</code> or a subset of the card's contents as shown
              below.
            </p>
            <Example href="https://coreui.io/react/docs/4.0/components/card/#border">
              <CRow>
                {[
                  { color: 'primary', textColor: 'primary' },
                  { color: 'secondary', textColor: 'secondary' },
                  { color: 'success', textColor: 'success' },
                  { color: 'danger', textColor: 'danger' },
                  { color: 'warning', textColor: 'warning' },
                  { color: 'info', textColor: 'info' },
                  { color: 'light' },
                  { color: 'dark' },
                ].map((item, index) => (
                  <CCol lg={4}>
                    <CCard
                      textColor={item.textColor}
                      className={`mb-3 border-${item.color}`}
                      key={index}
                    >
                      <CCardHeader>Header</CCardHeader>
                      <CCardBody>
                        <CCardTitle>{item.color} card title</CCardTitle>
                        <CCardText>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </CCol>
                ))}
              </CRow>
            </Example>
            <h3>Top border</h3>
            <p class="text-medium-emphasis small">
              Use{' '}
              <a href="https://coreui.io/docs/utilities/borders/" class="css-0">
                border utilities
              </a>{' '}
              to change just the <code class="css-0">border-color</code> of a card. Note that you
              can set <code class="css-0">textColor</code> property on the{' '}
              <code class="css-0">&lt;CCard&gt;</code> or a subset of the card's contents as shown
              below.
            </p>
            <Example href="https://coreui.io/react/docs/4.0/components/card/#top-border">
              <CRow>
                {[
                  { color: 'primary', textColor: 'primary' },
                  { color: 'secondary', textColor: 'secondary' },
                  { color: 'success', textColor: 'success' },
                  { color: 'danger', textColor: 'danger' },
                  { color: 'warning', textColor: 'warning' },
                  { color: 'info', textColor: 'info' },
                  { color: 'light' },
                  { color: 'dark' },
                ].map((item, index) => (
                  <CCol lg={4}>
                    <CCard
                      textColor={item.textColor}
                      className={`mb-3 border-top-${item.color} border-top-3`}
                      key={index}
                    >
                      <CCardHeader>Header</CCardHeader>
                      <CCardBody>
                        <CCardTitle>{item.color} card title</CCardTitle>
                        <CCardText>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </CCol>
                ))}
              </CRow>
            </Example>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Card groups</small>
          </CCardHeader>
          <CCardBody>
            <p class="text-medium-emphasis small">
              Use card groups to render cards as a single, attached element with equal width and
              height columns. Card groups start off stacked and use{' '}
              <code class="css-0">display: flex;</code> to become attached with uniform dimensions
              starting at the <code class="css-0">sm</code> breakpoint.
            </p>
            <Example href="https://coreui.io/react/docs/4.0/components/card/#card-groups">
              <CCardGroup>
                <CCard>
                  <CCardImage
                    component="svg"
                    orientation="top"
                    className="docs-placeholder-img"
                    width="100%"
                    height="180"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Image cap"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                      Image cap
                    </text>
                  </CCardImage>
                  <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>
                      This is a wider card with supporting text below as a natural lead-in to
                      additional content. This content is a little bit longer.
                    </CCardText>
                    <CCardText>
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </CCardText>
                  </CCardBody>
                </CCard>
                <CCard>
                  <CCardImage
                    component="svg"
                    orientation="top"
                    className="docs-placeholder-img"
                    width="100%"
                    height="180"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Image cap"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                      Image cap
                    </text>
                  </CCardImage>
                  <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>
                      This card has supporting text below as a natural lead-in to additional
                      content.
                    </CCardText>
                    <CCardText>
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </CCardText>
                  </CCardBody>
                </CCard>
                <CCard>
                  <CCardImage
                    component="svg"
                    orientation="top"
                    className="docs-placeholder-img"
                    width="100%"
                    height="180"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Image cap"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                      Image cap
                    </text>
                  </CCardImage>
                  <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>
                      This is a wider card with supporting text below as a natural lead-in to
                      additional content. This card has even longer content than the first to show
                      that equal height action.
                    </CCardText>
                    <CCardText>
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </CCardText>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </Example>
            <p class="text-medium-emphasis small">
              When using card groups with footers, their content will automatically line up.
            </p>
            <Example href="https://coreui.io/react/docs/4.0/components/card/#card-groups">
              <CCardGroup>
                <CCard>
                  <CCardImage
                    component="svg"
                    orientation="top"
                    className="docs-placeholder-img"
                    width="100%"
                    height="180"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Image cap"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                      Image cap
                    </text>
                  </CCardImage>
                  <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>
                      This is a wider card with supporting text below as a natural lead-in to
                      additional content. This content is a little bit longer.
                    </CCardText>
                  </CCardBody>
                  <CCardFooter>
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </CCardFooter>
                </CCard>
                <CCard>
                  <CCardImage
                    component="svg"
                    orientation="top"
                    className="docs-placeholder-img"
                    width="100%"
                    height="180"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Image cap"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                      Image cap
                    </text>
                  </CCardImage>
                  <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>
                      This card has supporting text below as a natural lead-in to additional
                      content.
                    </CCardText>
                  </CCardBody>
                  <CCardFooter>
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </CCardFooter>
                </CCard>
                <CCard>
                  <CCardImage
                    component="svg"
                    orientation="top"
                    className="docs-placeholder-img"
                    width="100%"
                    height="180"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Image cap"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                      Image cap
                    </text>
                  </CCardImage>
                  <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>
                      This is a wider card with supporting text below as a natural lead-in to
                      additional content. This card has even longer content than the first to show
                      that equal height action.
                    </CCardText>
                  </CCardBody>
                  <CCardFooter>
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </CCardFooter>
                </CCard>
              </CCardGroup>
            </Example>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Grid cards</small>
          </CCardHeader>
          <CCardBody>
            <p class="text-medium-emphasis small">
              Use the <code class="css-0">CRow</code> component and set{' '}
              <code class="css-0">&#123;xs|sm|md|lg|xl|xxl}=&#123;&#123; cols: * &#125;&#125;</code>{' '}
              property to control how many grid columns (wrapped around your cards) you show per
              row. For example, here's <code class="css-0">xs=&#123;&#123;cols: 1&#125;&#125;</code>{' '}
              laying out the cards on one column, and{' '}
              <code class="css-0">md=&#123;&#123;cols: 1&#125;&#125;</code> splitting four cards to
              equal width across multiple rows, from the medium breakpoint up.
            </p>
            <Example href="https://coreui.io/react/docs/4.0/components/card/#grid-cards">
              <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 2 }}>
                <CCol xs>
                  <CCard>
                    <CCardImage
                      component="svg"
                      orientation="top"
                      className="docs-placeholder-img"
                      width="100%"
                      height="180"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Image cap"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#868e96"></rect>
                      <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                        Image cap
                      </text>
                    </CCardImage>
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </CCardText>
                    </CCardBody>
                    <CCardFooter>
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </CCardFooter>
                  </CCard>
                </CCol>
                <CCol xs>
                  <CCard>
                    <CCardImage
                      component="svg"
                      orientation="top"
                      className="docs-placeholder-img"
                      width="100%"
                      height="180"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Image cap"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#868e96"></rect>
                      <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                        Image cap
                      </text>
                    </CCardImage>
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </CCardText>
                    </CCardBody>
                    <CCardFooter>
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </CCardFooter>
                  </CCard>
                </CCol>
                <CCol xs>
                  <CCard>
                    <CCardImage
                      component="svg"
                      orientation="top"
                      className="docs-placeholder-img"
                      width="100%"
                      height="180"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Image cap"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#868e96"></rect>
                      <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                        Image cap
                      </text>
                    </CCardImage>
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </CCardText>
                    </CCardBody>
                    <CCardFooter>
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </CCardFooter>
                  </CCard>
                </CCol>
                <CCol xs>
                  <CCard>
                    <CCardImage
                      component="svg"
                      orientation="top"
                      className="docs-placeholder-img"
                      width="100%"
                      height="180"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Image cap"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#868e96"></rect>
                      <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                        Image cap
                      </text>
                    </CCardImage>
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </CCardText>
                    </CCardBody>
                    <CCardFooter>
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </CCardFooter>
                  </CCard>
                </CCol>
              </CRow>
            </Example>
            <p class="text-medium-emphasis small">
              Change it to <code class="css-0">md=&#123;&#123; cols: 3&#125;&#125;</code> and you'll
              see the fourth card wrap.
            </p>
            <Example href="https://coreui.io/react/docs/4.0/components/card/#grid-cards">
              <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
                <CCol xs>
                  <CCard>
                    <CCardImage
                      component="svg"
                      orientation="top"
                      className="docs-placeholder-img"
                      width="100%"
                      height="180"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Image cap"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#868e96"></rect>
                      <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                        Image cap
                      </text>
                    </CCardImage>
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </CCardText>
                    </CCardBody>
                    <CCardFooter>
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </CCardFooter>
                  </CCard>
                </CCol>
                <CCol xs>
                  <CCard>
                    <CCardImage
                      component="svg"
                      orientation="top"
                      className="docs-placeholder-img"
                      width="100%"
                      height="180"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Image cap"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#868e96"></rect>
                      <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                        Image cap
                      </text>
                    </CCardImage>
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </CCardText>
                    </CCardBody>
                    <CCardFooter>
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </CCardFooter>
                  </CCard>
                </CCol>
                <CCol xs>
                  <CCard>
                    <CCardImage
                      component="svg"
                      orientation="top"
                      className="docs-placeholder-img"
                      width="100%"
                      height="180"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Image cap"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#868e96"></rect>
                      <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                        Image cap
                      </text>
                    </CCardImage>
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </CCardText>
                    </CCardBody>
                    <CCardFooter>
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </CCardFooter>
                  </CCard>
                </CCol>
                <CCol xs>
                  <CCard>
                    <CCardImage
                      component="svg"
                      orientation="top"
                      className="docs-placeholder-img"
                      width="100%"
                      height="180"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Image cap"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#868e96"></rect>
                      <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                        Image cap
                      </text>
                    </CCardImage>
                    <CCardBody>
                      <CCardTitle>Card title</CCardTitle>
                      <CCardText>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </CCardText>
                    </CCardBody>
                    <CCardFooter>
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </CCardFooter>
                  </CCard>
                </CCol>
              </CRow>
            </Example>
          </CCardBody>
        </CCard>
      </CCol>
      {/* <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Body</small>
          </CCardHeader>
          <CCardBody>
            <p class="text-medium-emphasis small">
              The main block of a card is the <code class="css-0">&lt;CCardBody&gt;</code>. Use it
              whenever you need a padded section within a card.
            </p>
            <Example href="https://coreui.io/react/docs/4.0/components/card/#body">
              <CCard>
                <CCardBody>This is some text within a card body.</CCardBody>
              </CCard>
            </Example>
          </CCardBody>
        </CCard>
      </CCol> */}
    </CRow>
  )
}

export default Cards
