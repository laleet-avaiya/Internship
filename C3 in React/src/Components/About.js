import React from 'react';

function About() {
    return (
        <section className="section-about">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">Exciting tours for adventurous people</h2>
            </div>

            <div className="row">
                <div className="col-1-of-2">
                    <h3 className="heading-tertiary u-margin-bottom-small">You'r going to fail in love wit nature</h3>
                    <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, soluta, ut
                        voluptatum similique qui dignissimos porro magnam vitae tempore placeat, cum corrupti obcaecati
        aspernatur! Blanditiis consectetur nisi dolor dolore provident.</p>

                    <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
                    <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, soluta, ut
                        voluptatum similique qui dignissimos porro magnam vitae tempore placeat, cum corrupti obcaecati
        aspernatur! Blanditiis consectetur nisi dolor dolore provident.</p>

                    <a href="/" className="btn-text">Learn more &rarr;</a>
                </div>
                <div className="col-1-of-2">
                    <div className="composition">
                        <img src="../img/nat-1.jpg" alt="Photo 1" className="composition__photo composition__photo--p1" />
                        <img src="../img/nat-2.jpg" alt="Photo 2" className="composition__photo composition__photo--p2" />
                        <img src="../img/nat-3.jpg" alt="Photo 3" className="composition__photo composition__photo--p3" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;