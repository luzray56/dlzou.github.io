particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 60,
            "density": {
                "enable": true,
                "value_area": 500
            }
        },
        "color": {
            "value": "#fff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.15,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.2,
                "sync": false
            }
        },
        "size": {
            "value": 2,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 50,
                "size_min": 1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#fff",
            "opacity": 0.2,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "bubble"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 800,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 250,
                "size": 4,
                "duration": 0.2,
                "opacity": 0.5,
                "speed": 1
            },
            "repulse": {
                "distance": 200,
                "duration": 0.5
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});