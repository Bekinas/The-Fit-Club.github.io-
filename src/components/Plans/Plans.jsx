import React from 'react'
import './plans.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className="plans-container">
        <div className="programs-header" style={{gap: '2rem'}}>
            <span className='stroke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITHUS</span>
        </div>

        <div className="plans">
            {plansData.map((plan, i) =>(
                <div className="plan" key={1}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>$ {plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature, i)=>(
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={1}>{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div>
                        <span> See more benefits...</span>
                    </div>
                    <button className="btn">Join now</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans