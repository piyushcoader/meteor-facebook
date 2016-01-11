Layout = React.createClass({

    mixins: [ReactMeteorData],
    getMeteorData(){
        return {
            currentUser: Meteor.user()
        }
    },
    render(){
        return <div className="wrapper">
            <div className="box">

                <div className="row row-offcanvas row-offcanvas-left">
                    <Sidebar />
                    <div className="column col-sm-10 col-xs-11" id="main">
                        <Header />
                        <div className="">
                            <div className="full col-sm-9">
                                <div className="col-sm-8">
                                <main>
                                    {this.props.content}
                                </main>
                                </div>
                                <div className="col-sm-4">

                                </div>
                            </div>
                        </div>


                    </div>


                </div>
            </div>
        </div>

    }


});