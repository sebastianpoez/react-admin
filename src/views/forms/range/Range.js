import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CFormLabel, CFormRange, CRow } from '@coreui/react'
import { DocsLink, Example } from 'src/reusable'

const Range = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Range</strong> <small></small>
          </CCardHeader>
          <CCardBody>
            <p class="text-medium-emphasis small">
              Create custom <code class="css-0">&lt;input type="range"&gt;</code> controls with{' '}
              <code class="css-0">&lt;CFormControl&gt;</code>.
            </p>
            <Example href="https://coreui.io/react/docs/4.0/forms/range">
              <CFormLabel htmlFor="customRange1">Example range</CFormLabel>
              <CFormRange id="customRange1" />
            </Example>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Range</strong> <small>Disabled</small>
          </CCardHeader>
          <CCardBody>
            <p class="text-medium-emphasis small">
              Add the <code class="css-0">disabled</code> boolean attribute on an input to give it a
              grayed out appearance and remove pointer events.
            </p>
            <Example href="https://coreui.io/react/docs/4.0/forms/range#disabled">
              <CFormLabel htmlFor="disabledRange">Disabled range</CFormLabel>
              <CFormRange id="disabledRange" disabled />
            </Example>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Range</strong> <small>Min and max</small>
          </CCardHeader>
          <CCardBody>
            <p class="text-medium-emphasis small">
              Range inputs have implicit values for <code class="css-0">min</code> and{' '}
              <code class="css-0">max</code>—<code class="css-0">0</code> and{' '}
              <code class="css-0">100</code>, respectively. You may specify new values for those
              using the <code class="css-0">min</code> and <code class="css-0">max</code>{' '}
              attributes.
            </p>
            <Example href="https://coreui.io/react/docs/4.0/forms/range#min-and-max">
              <CFormLabel htmlFor="customRange2">Example range</CFormLabel>
              <CFormRange min="0" max="5" defaultValue="3" id="customRange2" />
            </Example>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Range</strong> <small>Steps</small>
          </CCardHeader>
          <CCardBody>
            <p class="text-medium-emphasis small">
              By default, range inputs "snap" to integer values. To change this, you can specify a{' '}
              <code class="css-0">step</code> value. In the example below, we double the number of
              steps by using <code class="css-0">step="0.5"</code>.
            </p>
            <Example href="https://coreui.io/react/docs/4.0/forms/range#steps">
              <CFormLabel htmlFor="customRange3">Example range</CFormLabel>
              <CFormRange min="0" max="5" step="0.5" defaultValue="3" id="customRange3" />
            </Example>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Range
