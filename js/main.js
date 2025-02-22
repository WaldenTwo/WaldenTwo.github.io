const _0x3265 = ['pathdata:id', 'hidden', 'startx', 'href', 'DOMContentLoaded', 'mozHidden', 'floor', 'UNDIRECTED', '.content-subtitle', '.content-intro', 'pageY', 'classList', 'click', 'catch', 'config.json', 'abs', '.arrow', 'loaded', 'pageX', 'mouseenter', 'style', '<span>', 'then', '.wrap', 'test', 'removeChild', 'parentElement', 'Error\x20loading\x20config:', 'random', 'LEFT', 'switched', 'addEventListener', 'RIGHT', 'easeOutQuad', 'path', 'shape', 'DOWN', '-200vh'];
const _0x89af = function(_0x3265b3, _0x89afa3) {
    _0x3265b3 = _0x3265b3 - 0x0;
    let _0x57501b = _0x3265[_0x3265b3];
    return _0x57501b;
};
window['hiddenProperty'] = _0x89af('0x1') in document ? _0x89af('0x1') : 'webkitHidden' in document ? 'webkitHidden' : _0x89af('0x5') in document ? _0x89af('0x5') : null;
window['DIRECTIONS'] = {
    'UP': 'UP',
    'DOWN': _0x89af('0x24'),
    'LEFT': 'LEFT',
    'RIGHT': 'RIGHT',
    'UNDIRECTED': _0x89af('0x7')
};
window['isPhone'] = /Mobile|Android|iOS|iPhone|iPad|iPod|Windows Phone|KFAPWI/i [_0x89af('0x18')](navigator['userAgent']);

function getMoveDirection(_0x5e2f56, _0x4ee7a2, _0x4e98a8, _0x754d95) {
    if (!isPhone) {
        return;
    }
    const _0x207f22 = _0x4e98a8 - _0x5e2f56;
    const _0x342168 = _0x754d95 - _0x4ee7a2;
    if (Math['abs'](_0x207f22) < 0x2 && Math[_0x89af('0xf')](_0x342168) < 0x2) {
        return DIRECTIONS[_0x89af('0x7')];
    }
    const _0x2767f8 = (_0x4036d8, _0x5bf86d) => Math['atan2'](_0x5bf86d, _0x4036d8) * 0xb4 / Math['PI'];
    const _0x2868ff = _0x2767f8(_0x207f22, _0x342168);
    if (_0x2868ff >= -0x87 && _0x2868ff <= -0x2d) {
        return DIRECTIONS['UP'];
    } else if (_0x2868ff > 0x2d && _0x2868ff < 0x87) {
        return DIRECTIONS['DOWN'];
    } else if (_0x2868ff >= 0x87 && _0x2868ff <= 0xb4 || _0x2868ff >= -0xb4 && _0x2868ff < -0x87) {
        return DIRECTIONS[_0x89af('0x1d')];
    } else if (_0x2868ff >= -0x2d && _0x2868ff <= 0x2d) {
        return DIRECTIONS[_0x89af('0x20')];
    }
    return DIRECTIONS[_0x89af('0x7')];
}

function loadIntro() {
    if (document[hiddenProperty] || loadIntro['loaded']) {
        return;
    }
    setTimeout(() => {
        $(_0x89af('0x17'))[_0x89af('0xb')]['add']('in');
        setTimeout(() => {
            $(_0x89af('0x8'))['innerHTML'] = _0x89af('0x15') + [...subtitle]['join']('</span><span>') + '</span>';
        }, 0x10e);
    }, 0x0);
    loadIntro[_0x89af('0x11')] = !![];
}

function switchPage() {
    if (switchPage['switched']) {
        return;
    }
    const _0x3d15ab = {
        'intro': $(_0x89af('0x9')),
        'path': $('.shape-wrap\x20path'),
        'shape': $('svg.shape')
    };
    _0x3d15ab[_0x89af('0x23')][_0x89af('0x14')]['transformOrigin'] = '50%\x200%';
    anime({
        'targets': _0x3d15ab['intro'],
        'duration': 0x44c,
        'easing': 'easeInOutSine',
        'translateY': _0x89af('0x25')
    });
    anime({
        'targets': _0x3d15ab[_0x89af('0x23')],
        'scaleY': [{
            'value': [0.8, 1.8],
            'duration': 0x226,
            'easing': 'easeInQuad'
        }, {
            'value': 0x1,
            'duration': 0x226,
            'easing': 'easeOutQuad'
        }]
    });
    anime({
        'targets': _0x3d15ab[_0x89af('0x22')],
        'duration': 0x44c,
        'easing': _0x89af('0x21'),
        'd': _0x3d15ab['path']['getAttribute'](_0x89af('0x0')),
        'complete': function(_0x31cedc) {
            if (canvas) {
                cancelAnimationFrame(animationID);
                canvas[_0x89af('0x1a')][_0x89af('0x19')](canvas);
                canvas = null;
            }
        }
    });
    switchPage[_0x89af('0x1e')] = !![];
}
function loadMain() {
    fetch('/api/urls.json')
        .then(response => response.json()) 
        .then(data => {
            const urls = data; 
            const randomIndex = Math.floor(Math.random() * urls.length); 
            const randomUrl = urls[randomIndex]; 
            window.location.href = randomUrl; 
        })
        .catch(error => {
            console.error('An error occurred while fetching the URLs:', error); 
        });
}
function loadAll() {
    if (loadAll['loaded']) {
        return;
    }
    switchPage();
    loadMain();
    loadAll['loaded'] = !![];
}
window['visibilityChangeEvent'] = hiddenProperty['replace'](/hidden/i, 'visibilitychange');
window[_0x89af('0x1f')](visibilityChangeEvent, loadIntro);
window['addEventListener'](_0x89af('0x4'), loadIntro);
const enterEl = $('.enter');
enterEl['addEventListener'](_0x89af('0xc'), loadAll);
enterEl[_0x89af('0x1f')]('touchenter', loadAll);
document['body'][_0x89af('0x1f')]('mousewheel', loadAll, {
    'passive': !![]
});
$(_0x89af('0x10'))['addEventListener'](_0x89af('0x13'), loadAll);
if (isPhone) {
    document[_0x89af('0x1f')]('touchstart', function(_0x460e5b) {
        window[_0x89af('0x2')] = _0x460e5b['touches'][0x0][_0x89af('0x12')];
        window['starty'] = _0x460e5b['touches'][0x0][_0x89af('0xa')];
    }, {
        'passive': !![]
    });
    document['addEventListener']('touchend', function(_0x9a29b2) {
        let _0x6d4023, _0x58903c;
        _0x6d4023 = _0x9a29b2['changedTouches'][0x0][_0x89af('0x12')];
        _0x58903c = _0x9a29b2['changedTouches'][0x0]['pageY'];
        const _0x44f1df = getMoveDirection(startx, starty, _0x6d4023, _0x58903c);
        if (_0x44f1df !== DIRECTIONS['UP']) {
            return;
        }
        loadAll();
    }, {
        'passive': !![]
    });
}
