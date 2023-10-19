function startTextToImageConversion() {
    const textInput = document.getElementById('source-text').value;
    const imageOutput = document.getElementById('result-text');
    imageOutput.innerHTML = '';

    const letterToImage = {
        'A': 'img/A.png',
        'B': 'img/B.png',
        'C': 'img/C.png',
        'D': 'img/D.png',
        'E': 'img/E.png',
        'F': 'img/F.png',
        'G': 'img/G.png',
        'H': 'img/H.png',
        'I': 'img/I.png',
        'J': 'img/J.png',
        'K': 'img/K.png',
        'L': 'img/L.png',
        'M': 'img/M.png',
        'N': 'img/N.png',
        'O': 'img/O.png',
        'P': 'img/P.png',
        'Q': 'img/Q.png',
        'R': 'img/R.png',
        'S': 'img/S.png',
        'T': 'img/T.png',
        'U': 'img/U.png',
        'V': 'img/V.png',
        'W': 'img/W.png',
        'X': 'img/X.png',
        'Y': 'img/Y.png',
        'Z': 'img/Z.png',
        'a': 'img/small_a.png',
        'b': 'img/small_b.png',
        'c': 'img/small_c.png',
        'd': 'img/small_d.png',
        'e': 'img/small_e.png',
        'f': 'img/small_f.png',
        'g': 'img/small_g.png',
        'h': 'img/small_h.png',
        'i': 'img/small_i.png',
        'j': 'img/small_j.png',
        'k': 'img/small_k.png',
        'l': 'img/small_l.png',
        'm': 'img/small_m.png',
        'n': 'img/small_n.png',
        'o': 'img/small_o.png',
        'p': 'img/small_p.png',
        'q': 'img/small_q.png',
        'r': 'img/small_r.png',
        's': 'img/small_s.png',
        't': 'img/small_t.png',
        'u': 'img/small_u.png',
        'v': 'img/small_v.png',
        'w': 'img/small_w.png',
        'x': 'img/small_x.png',
        'y': 'img/small_y.png',
        'z': 'img/small_z.png',
    };

    const letters = textInput.split(''); 
    let delay = 0.5; 

        for (let i = 0; i < letters.length; i++) {
            const char = letters[i].toLowerCase(); 

            setTimeout(() => {
                if (char in letterToImage) {
                    const image = document.createElement('img');
                    image.src = letterToImage[char];
                    imageOutput.appendChild(image);
                } 
                else {
                    const spanNode = document.createElement('span');
                    spanNode.innerText = char
                    imageOutput.appendChild(spanNode);
                }
                if (i === word.length - 1) {
                    imageOutput.appendChild(document.create(' '));
                }
            }, delay);

            delay += 100; 
        }
    
}