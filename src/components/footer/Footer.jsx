import React from "react"
import "./style.css"
import insta from "../../img/icons/instagram.svg"
import vk from "../../img/icons/vk.svg"
import linked from "../../img/icons/linkedIn.svg"
import twitter from "../../img/icons/twitter.svg"
import github from "../../img/icons/gitHub.svg"

const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="container">
          <div class="footer__wrapper">
            <ul class="social">
              <li class="social__item">
                <a href="#!">
                  <img src={vk} alt="Link" />
                </a>
              </li>
              <li class="social__item">
                <a href="#!">
                  <img src={insta} alt="Link" />
                </a>
              </li>
              <li class="social__item">
                <a href="#!">
                  <img src={github} alt="Link" />
                </a>
              </li>
              <li class="social__item">
                <a href="#!">
                  <img src={twitter} alt="Link" />
                </a>
              </li>
              <li class="social__item">
                <a href="#!">
                  <img src={linked} alt="Link" />
                </a>
              </li>
            </ul>
            <div class="copyright">
              <p>© 2022 frontend-dev.com</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
