import React from "react";

import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [
                {
                    title: 'clothes',
                    imageUrl: 'https://miro.medium.com/max/4080/1*g2rWkmY0VEjFLNmDGwZakg.jpeg',
                    id: 1,
                    linkUrl: ''
                  },
                  {
                    title: 'shoes',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 2,
                    linkUrl: ''
                  },
                  {
                    title: 'accessories',
                    imageUrl: 'http://strictlyformal.com.au/wp-content/uploads/2020/12/34.jpeg',
                    id: 3,
                    linkUrl: ''
                  },
                  {
                    title: 'womens',
                    imageUrl: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/02/20/12/lfwstreetstyle2002j.jpg?width=1200&width=1200&auto=webp&quality=75',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                  },
                  {
                    title: 'mens',
                    imageUrl: 'https://thekolsocial.com/wp-content/uploads/sites/4/2019/01/Milano-m-str-S19-169-1200x800.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: 'mens'
                  }
            ]
        };
    }

    render () {
        return (
            
            
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        );
    }
}

export default Directory;